# Generated by Django 5.0.1 on 2024-02-02 05:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('information', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='method_reivew',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weight', models.IntegerField(default=0)),
                ('method', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='information.fishing_method')),
            ],
        ),
    ]
