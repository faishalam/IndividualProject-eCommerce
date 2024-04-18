import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../features/product/asyncAction';

export default function Search(props) {
    const { search, setSearch } = props
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        search: ''
    })
    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const params = {
            search: form.search
        };
        dispatch(fetchProducts(params));
    }

    return (
        <>
            <form className='w-full h-full bg-[#f7f7f7] flex' onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    name="search"
                    className='w-full h-full rounded-md bg-[#f7f7f7] focus:border-gray-400 focus:outline-none text-2xl ml-4'
                    placeholder="SEARCH"
                    value={form.search}
                    onChange={handleOnChange}
                />
                <Link to={`/products/search=${form.search}`}><button type='submit' className='bg-[#f7f7f7] mr-4'></button></Link>
                <button onClick={() => setSearch(false)} className='bg-[#f7f7f7] mr-4 text-sm'>CLOSE</button>
            </form>
        </>
    )
}
