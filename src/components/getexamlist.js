import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Getexamlist() {
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState([]);
  const [Id, setId] = useState(null);

  const id = sessionStorage.getItem("id");
  const server_key = sessionStorage.getItem("server_key");
  const tokenu = sessionStorage.getItem("tokenu");

  useEffect(() => {

const apiUrl = 'https://test.e-prathibha.com/apis/test_free_exam';
    const headers = {
      'id': id,
      'server_key': server_key,
      'tokenu': tokenu
    };

    axios.post(apiUrl, {}, { headers }).then((response) => {setResponseData(response.data)})
     }, [id, server_key, tokenu]);

console.log(responseData);

const Handlenavigateyear = (examId) => {

    // console.log(examId);
     setId(examId);    // Set the examid in state
     const examid=sessionStorage.setItem("examId",examId)
    //  console.log(examid);
    navigate(`/getquestionlist/${examId}`);
  };



  const RenderPapers = () => {
    if (responseData.status===200) {
      return responseData.data.exams.map((exam, index) => {
        const className = Object.keys(exam)[0];
        console.log(className);

        const paperData = exam[className];
        console.log(paperData);
        
        return (
          <div key={index}>
            <h4>{className}</h4>
            <ol>
              {paperData.map((paper, paperIndex) => (
                <li key={paperIndex}>
                  <button onClick={() => Handlenavigateyear(paper.Exam.id)}>
                 {paper.Exam.name}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        );
      });
    } 
  };

  return (
    <div>
      {RenderPapers()}
    </div>
  );
}

export default Getexamlist;






















