from django import forms

class ImageGenForm(forms.Form):
    image = forms.CharField(max_length=1000, required=False)
    prompt = forms.CharField(max_length=500)

class FallbackImageForm(forms.Form):
    image = forms.ImageField()
    custom = forms.CharField(max_length=500, required=False)
    theme = forms.CharField(max_length=100, required=False)
    room = forms.CharField(max_length=100, required=False)
