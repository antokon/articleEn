# Generated by Django 2.0.7 on 2018-07-25 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0007_auto_20180725_1119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='pub_date',
            field=models.DateTimeField(verbose_name='date published'),
        ),
    ]
