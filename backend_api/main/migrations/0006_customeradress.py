# Generated by Django 5.0.7 on 2024-07-23 08:51

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_alter_orderitems_order_alter_product_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerAdress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.TextField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_address', to='main.customer')),
            ],
        ),
    ]
