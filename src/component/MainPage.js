import React, { useEffect, useState } from 'react'
import './MainPage.scss'
import TestCase from '../component/Testcase/TestCase'
import { useSelector } from 'react-redux'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function MainPage() {

    const fullList = useSelector(state => state.appConfigReducer.lists);
   
    const totalCategory = [...new Set(fullList?.map(list => list.type))];
   

    const [list, setList] = useState(fullList);
    const [filteredList, setFilteredList] = useState(fullList);
    const [selectedCat, setCategory] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        setList(fullList);

        const filterList = () => {
            let newfilterlist = list;

            if (selectedCat.length > 0) {
                newfilterlist = newfilterlist.filter((list) =>
                    selectedCat.includes(list.type)
                )
            }

            setFilteredList(newfilterlist);
        }

        filterList();

    }, [fullList, list, selectedCat])



    const handleCatCheckBox = (e) => {
        const cat = e.target.value;

        if (selectedCat.includes(cat)) {
            setCategory((prev) => prev.filter((type) => type !== cat))
        }
        else {
            setCategory((prev) => [
                ...prev, cat
            ])
        }
        setPage(1);
       
    }


    const handleSelectedPage = (i) => {
        console.log(filteredList.length, "hviguyeybfrbh")
        if (i >= 1 && i <= filteredList.length / 10 && i !== page) {
            setPage(i);
        }


    }



    return (
        <div className="mainpage">
            <div className="inner_main_page">
                <div className="left_side">
                    <div className="section_name">
                        <h3>Type of TestCases</h3>
                        <span className='hr_line'></span>
                    </div>
                    <div className="filter">
                        {totalCategory.map((type, index) => (

                            <label key={index}>
                                <input
                                    type="checkbox"
                                    value={type}
                                    checked={selectedCat.includes(type)}
                                    onChange={handleCatCheckBox}
                                />
                                {type}
                            </label>


                        ))}
                    </div>

                </div>

                <div className="right_side">
                    <div className="list_name"><h1>List of TestCases</h1> <span className='hr_line'></span></div>

                    <div className="list_of_cases">
                        {
                            filteredList?.slice(page * 10 - 10, page * 10).map((data, index) => <TestCase key={index} index={index} data={data} />)
                        }
                    </div>

                    {filteredList.length > 0 && <div className='pagination'>
                        <span onClick={() => handleSelectedPage(page - 1)}><FaAngleLeft/></span>
                        {[...Array(Math.ceil(filteredList.length / 10))].map((_, i) => {
                            const startChunk = Math.floor((page - 1) / 10) * 10 + 1;
                            const endChunk = Math.min(startChunk + 9, Math.ceil(filteredList.length / 10));
                            if (i + 1 >= startChunk && i + 1 <= endChunk) {
                                return (
                                    <span
                                        className={page === i + 1 ? "black" : "white"}
                                        onClick={() => handleSelectedPage(i + 1)}
                                        key={i}
                                    >
                                        {i + 1}
                                    </span>
                                );
                            }
                            return null;
                        })}
                        <span onClick={() => handleSelectedPage(page + 1)}><FaAngleRight/></span>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default MainPage