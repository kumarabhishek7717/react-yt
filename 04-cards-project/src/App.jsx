import React from 'react'

import Card from './components/Card'
import  User  from './components/User'


const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?pid=Api&P=0&h=180",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logocreator.io/wp-content/uploads/2023/11/01cada77a0a7d326d85b7969fe26a728-scaled.jpg",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Software Development Engineer I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.xNooNb8qvBDF9_y6pyPIoQHaEK?pid=Api&P=0&h=180",
    companyName: "Apple",
    datePosted: "10 weeks ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logodix.com/logo/2209501.jpg",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.qbsTDbB9qKP6pBQ0Rl9bpQHaEK?pid=Api&P=0&h=180",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/10/Tesla-Logo.png",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.-qm4twWabXsyS5rKA4NcIQHaEK?pid=Api&P=0&h=180",
    companyName: "Nvidia",
    datePosted: "8 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo-2020-present.png",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Symbol.png",
    companyName: "Oracle",
    datePosted: "12 days ago",
    post: "Java Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Chennai, India"
  }
];
console.log(jobOpenings);

  return (
    <div className='parent'>
   {jobOpenings.map(function(elem){
       return <Card company={elem.companyName} brandLogo={elem.brandLogo} location = {elem.location} datePosted ={elem.datePosted} post={elem.post} tag1={elem.tag1} pay={elem.pay} tag2={elem.tag2}/>
   })}
   </div>
  )
}

export default App
