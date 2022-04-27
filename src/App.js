import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";
import { Card } from "./components/Card";
import { getQuestionsData } from "./redux/QuestionDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./components/Loading";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestionsData());
  }, [dispatch]);
  const { questionData } = useSelector((state) => ({
    questionData: state.questions.questionData,
  }));
  return (
    <div className="p-8 sm:p-14 md:p-20">
      <Header headingText="History" />
      <SubHeader
        subHeadingText={`${
          questionData?.data?.length === 1
            ? "1 Question"
            : questionData?.data?.length + " Questions"
        }`}
      />

      <div>
        {questionData.loading ? (
          <Loading />
        ) : questionData?.data?.length > 0 ? (
          questionData?.data?.map((question, index) => (
            <div key={index}>
              <Card
                keyIndex={index}
                number={question?.number}
                title={question?.title}
                isReviewed={question.is_reviewed}
              />
            </div>
          ))
        ) : (
          <SubHeader subHeadingText="No questions were found." />
        )}
      </div>
    </div>
  );
}

export default App;
