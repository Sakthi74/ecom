from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price=models.DecimalField(max_digits=8,decimal_places=3)
    descripion=models.CharField(max_length=400)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True) 
    def __str__(self):
        return self.name