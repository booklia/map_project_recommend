from random import randint, sample

from model import get_prediction

inputData = {'type': 'long',
             'categories': {'statues': 5, 'nature': 4, 'churches': 4, 'sites': 3, 'theatres': 2, 'museums': 2,
                            'galleries': 1, 'shopping': 1, 'national_cuisine': 1, 'fastfood': 1, 'cafe': 1, 'bars': 1
                            }}

typeData = inputData.get('type')
typeCategories = inputData.get('categories')

print(typeCategories)

points = randint(3, 6)

print(points)

topCategories = list(sorted(typeCategories.items(), key=lambda x: x[1]))[::-1]

print(topCategories)

points2 = randint(2, 6)

arr = sample([i[0] for i in topCategories], points, counts=[i[1] for i in topCategories])

print(arr)

print(get_prediction(arr))