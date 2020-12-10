const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderschema = new Schema({
    _id: { type: Number, required: true },
    res_id: { type: Number, required: true, unique: false },
    menu_id: { type: Number, required: true, unique: false },
    customer_id: { type: Number, required: true, unique: false },
    quantity: { type: Number, required: true },
    address: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    order_date: { type: Date, required: true }
},
    {
        collection: 'orders'
    }
);
/*
{
"_id": 5,
"res_id": 2,
"menu_id": 7,
"customer_id": 1,
"quantity": 2,
"address": "Univeristy Street",
"phone": "444555555",
"order_date": "2020-12-09T21:50:08.000Z"
}
*/
module.exports = mongoose.model('orders', orderschema);