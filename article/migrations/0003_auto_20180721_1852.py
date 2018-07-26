# Generated by Django 2.0.7 on 2018-07-21 15:52

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0002_auto_20180719_2108'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='highlights',
            name='article',
        ),
        migrations.AddField(
            model_name='articles',
            name='highlight',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Highlights',
        ),
    ]