from django.shortcuts import render

# Create your views here.
def login(response):
    if response.method == 'POST':
        