"""Lexical triage only, never an automatic judgement of clinical duplication.
Run with an exported REx-PN-Complete-Bank.json and an output JSON path.
Requires scikit-learn in the development environment; not used by the app.
"""
import json, sys
from collections import Counter
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

bank=json.load(open(sys.argv[1]))
questions=bank['questions']
text=[q['stem']+' '+q.get('learningObjective',q['takeaway']) for q in questions]
vectors=TfidfVectorizer(stop_words='english',ngram_range=(1,2),sublinear_tf=True).fit_transform(text)
similarity=cosine_similarity(vectors)
pairs=[]
for i in range(len(questions)):
    for j in range(i+1,len(questions)):
        if similarity[i,j]>=.53:
            pairs.append({'ids':[questions[i]['id'],questions[j]['id']],
                'lexicalSimilarity':round(float(similarity[i,j]),3),
                'stems':[questions[i]['stem'],questions[j]['stem']]})
pairs.sort(key=lambda p:-p['lexicalSimilarity'])
report={'method':'TF-IDF unigrams and bigrams; lexical screening, not semantic or clinical validation',
    'threshold':.53,'count':len(questions),'pairs':pairs,
    'reasoningSkills':dict(Counter(q.get('reasoningSkill','unclassified') for q in questions)),
    'difficulty':dict(Counter(q.get('difficulty','unclassified') for q in questions))}
json.dump(report,open(sys.argv[2],'w'),indent=2)
print(json.dumps({'questions':len(questions),'flaggedPairs':len(pairs),'output':sys.argv[2]}))
