<<<<<<< HEAD
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Slide from '../Components/Card/Slide';

const Technology = () => {
  const [budgetdata, setBudgetData] = useState();
  useEffect(() => {
      const fetch = async()=> {
        const response = await axios.get('https://newsportalbackend-crdw.onrender.com/api/v1/news/getallnews')
        console.log(response.data)
        setBudgetData(response.data.news)
      }
      fetch()
    }, [])
    
  return (
    <div className='m-5'>
        {budgetdata &&  budgetdata.map((element,id)=>(
            <Slide id={id} img={element.avatar} title={element.title} date={element.date} />
        ))}
    </div>
  );
}

=======
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Slide from '../Components/Card/Slide';

const Technology = () => {
  const [budgetdata, setBudgetData] = useState();
  useEffect(() => {
      const fetch = async()=> {
        const response = await axios.get('https://newsportalbackend-crdw.onrender.com/api/v1/news/getallnews')
        console.log(response.data)
        setBudgetData(response.data.news)
      }
      fetch()
    }, [])
    
  return (
    <div className='m-5'>
        {budgetdata &&  budgetdata.map((element,id)=>(
            <Slide id={id} img={element.avatar} title={element.title} date={element.date} />
        ))}
    </div>
  );
}

>>>>>>> 77f0b7975a4ef4138d90afd297611dd1f7e1725e
export default Technology