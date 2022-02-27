# from django.contrib.auth.models import User
from django.db import models
from django.db.models.deletion import SET_NULL
from api.user.models import CustomUser
from api.product.models import Product
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    product_names = models.CharField(max_length=500)
    total_product = models.CharField(max_length=500,default=0)
    transaction_id = models.CharField(max_length=150,default=0)
    total_amount = models.CharField(max_length=150,default=0)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
