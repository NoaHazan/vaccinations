# Generated by Django 4.0.3 on 2022-04-18 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=255)),
                ('lastName', models.CharField(max_length=255)),
                ('date', models.CharField(max_length=10)),
                ('address', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('zipCode', models.IntegerField(max_length=255)),
                ('landLine', models.CharField(max_length=20)),
                ('cellularPhone', models.CharField(max_length=20)),
                ('covidInfections', models.CharField(blank=True, max_length=255)),
                ('Comorbidities', models.CharField(blank=True, max_length=255)),
            ],
        ),
    ]
