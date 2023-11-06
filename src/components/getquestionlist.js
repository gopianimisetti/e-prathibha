import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const QuestionsList = () => {
  const navigate=useNavigate();
  const [questionsdata, setQuestionsData] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);


  const id = sessionStorage.getItem("id");
  const server_key = sessionStorage.getItem("server_key");
  const tokenu = sessionStorage.getItem("tokenu");
  const examId = sessionStorage.getItem("examId");
  

  const headers = {
    'id': id,
    'server_key': server_key,
    'tokenu': tokenu,
  };

  const apiUrl = `https://test.e-prathibha.com/apis/start_exam?examId=${examId}`;

  useEffect(() => {
    if (examId) {
      axios.get(apiUrl, { headers }).then((response) => {
          if (response.data.status === 200) {
            setQuestionsData(response.data.data.exam);

          
            const questionsdata=response.data.data.exam;
            console.log(questionsdata);
          }})}
  });

  //  function to handle question selection
  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
   
  };



  return (
    <div>
      <center><h4>Questions List for Selected Year</h4></center>
      <ol>
          {questionsdata.map((value, index) => (
            <li key={index} onClick={() => handleQuestionClick(value)}>
              {value.Question.question.above}
              <p>{value.Question.Subject.explanation}</p>

              <p> <input type="radio" name={index} id="option1"/>{value.Question.option1}</p>
              <p> <input type="radio" name={index} id="option2"/>{value.Question.option2}</p>
              <p> <input type="radio" name={index} id="option3"/>{value.Question.option3}</p>
              <p> <input type="radio" name={index} id="option4"/>{value.Question.option4}</p>
              
              </li>
          ))}
        </ol>
<hr></hr>
<center style={{padding:"30px"}}>
  <button className="btn btn-info btn-lg" onClick={()=>{
     navigate("/finishexam")
  
    alert(
        
      "Are You Sure To Submit the Exam"
    )}}>Finish Exam</button></center>

</div>
  );
};

export default QuestionsList;


