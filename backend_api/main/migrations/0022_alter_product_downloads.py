# Generated by Django 5.0.7 on 2024-08-21 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0021_product_downloads'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='downloads',
            field=models.IntegerField(default=0, max_length=200, null=True),
        ),
    ]
