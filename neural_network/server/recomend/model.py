import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Ridge

const = ''
data = pd.read_csv('etalon.csv', sep=',')
data = data.sample(frac=1)
#print(data.shape[1])

X = data[['id', 'category']]
y = data[['id', 'rec']]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

model = Ridge(alpha=1.0)
model.fit(X_train, y_train)

model.score(X_test, y_test)

example = {'id': [1],
           'category': [5]
           }
example_df = pd.DataFrame(example)
model.predict(example_df)

stasik = ['museums', 'statues', 'shopping', 'churches']

def get_prediction(stasik):
    unique = set(stasik)
    print(unique)
    for i in stasik:
        print(i)

    return None
    #return model.predict(example_df)

get_prediction(stasik)
