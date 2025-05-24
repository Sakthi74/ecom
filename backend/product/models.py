from django.db import models

class product(models.Model):
    name = models.CharField(max_length=100)
    price=models.DecimalField(max_digits=8,decimal_places=3)
    descripion=models.CharField(max_length=400)
    def __str__(self):
        return self.name