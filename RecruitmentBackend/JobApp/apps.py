from django.apps import AppConfig


class JobappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'JobApp'

    def ready(self):
        import JobApp.signals