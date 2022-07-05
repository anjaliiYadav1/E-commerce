import React, { useEffect } from 'react';
import './Orders.css';
import { useState } from 'react';
import { database } from './firebase';
import { useStateValue } from "./StateProvider";
import Order from './Order';


function Orders() {
    const [{user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if(user) {
            database.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({ //realtime 
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }
        else {
            setOrders([]);
        }
    }, [user])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders__list'>
            {orders?.map(order => (
                <Order order = {order}/>
            ))}

        </div>
    </div>
  )
}

export default Orders