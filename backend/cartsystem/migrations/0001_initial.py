# Generated by Django 5.2 on 2025-06-26 17:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '0002_product_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('price', models.DecimalField(decimal_places=2, default=0.0, max_digits=8)),
                ('description', models.TextField(default='')),
                ('image', models.ImageField(blank=True, null=True, upload_to='product_images/')),
                ('product', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='product.product')),
            ],
        ),
    ]
