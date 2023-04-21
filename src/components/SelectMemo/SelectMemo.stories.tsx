import type {Meta} from '@storybook/react';
import React, {useMemo, useState} from "react";
import {Select} from "../Select/Select";

const meta: Meta = {
    title: 'SelectMemo',
    component: Select
}
export default meta;
export const SelectMemoExample = () => {

    const [cities, setCities] = useState([
        {id: 'Bel', value: '1', title: 'Minsk', population: 1000},
        {id: 'Bel', value: '2', title: 'Kamenets', population: 10},
        {id: 'Bel', value: '3', title: 'Brest', population: 110},
        {id: 'Ua', value: '4', title: 'Kiev', population: 10},
        {id: 'Ua', value: '5', title: 'Lviv', population: 1000},
        {id: 'Ua', value: '6', title: 'Odessa', population: 110},
        {id: 'Ru', value: '7', title: 'Tambov', population: 1000},
        {id: 'Ru', value: '8', title: 'Tagara', population: 10},
        {id: 'Ru', value: '9', title: 'Krasnodar', population: 110}
    ])
    const [value, setValue] = useState('0')
    const [count, setCount] = useState(0)

    const filterPopulation = useMemo(() => {
        return cities.filter(el => el.population > 999)
    }, [cities])
    const filterIdBel = useMemo(() => {
        return cities.filter(el => el.id === 'Bel')
    }, [cities])
    const filterIdUa = useMemo(() => {
        return cities.filter(el => el.id === 'Ua')
    }, [cities])
    const filterIdRu = useMemo(() => {
        return cities.filter(el => el.id === 'Ru')
    }, [cities])

    // const filterPopulation = cities.filter(el=> el.population > 999)
    // const filterIdBel = cities.filter(el=> el.id === 'Bel')
    // const filterIdUa = cities.filter(el=> el.id === 'Ua')
    // const filterIdRu = cities.filter(el=> el.id === 'Ru')

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <div>Count:{count}</div>
            <Select value={value} onChange={setValue} items={filterPopulation}/>
            <hr/>
            <Select value={value} onChange={setValue} items={filterIdBel}/>
            <hr/>
            <Select value={value} onChange={setValue} items={filterIdUa}/>
            <hr/>
            <Select value={value} onChange={setValue} items={filterIdRu}/>
            <hr/>
        </div>
    )
}