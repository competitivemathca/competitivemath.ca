# Generated by Django 4.2.6 on 2023-11-14 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_user_description_user_following_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_picture',
            field=models.TextField(blank=True),
        ),
    ]