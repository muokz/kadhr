# Generated by Django 5.0.7 on 2024-09-15 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0033_product_publish_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='productcategory',
            name='cat_img',
            field=models.ImageField(null=True, upload_to='category_imgs/'),
        ),
    ]
