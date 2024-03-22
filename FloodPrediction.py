import numpy as np
from sklearn import svm
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
import pandas as pd

# Sample dataset
data = {
    'Precipitation': [1.2, 2.3, 0.5, 3.0, 2.2, 1.8, 0.9, 1.5, 12.5, 8.0, 10.5, 4.0],
    'Elevation': [100, 200, 150, 180, 120, 130, 190, 160, 500, 700, 100, 350],
    'Flood': [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
}

df = pd.DataFrame(data)

# Separate features and target variable
X = df[['Precipitation', 'Elevation']]
y = df['Flood']

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Feature scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# SVM model
model = svm.SVC(kernel='linear')
model.fit(X_train_scaled, y_train)

# Predictions
y_pred = model.predict(X_test_scaled)

# Evaluate model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)