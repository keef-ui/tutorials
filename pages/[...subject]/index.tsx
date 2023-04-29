import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

type SubjectProps = {
  subject: string;
  subjectData: {
    title: string;
    content: string;
    author: string;
  };
};

const SubjectPage: NextPage<SubjectProps> = ({ subject, subjectData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!subjectData) {
    return (
      <div>
        <h1>Subject not found</h1>
        <p>The subject "{subject}" was not found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{subjectData.title}</h1>
      <p>{subjectData.content}</p>
      <p>Author: {subjectData.author}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SubjectProps> = async ({
  params,
}) => {
  const { subject } = params;

  const allowedSubjects = ["subject1", "subject2", "subject3"];
  if (!allowedSubjects.includes(subject[0])) {
    return {
      notFound: true,
    };
  }

  // Return a placeholder value for subjectData
  const subjectData = {
    title: `Placeholder ${subject}`,
    content: `This is a placeholder content for ${subject}`,
    author: "John Doe",
  };

  return {
    props: {
      subject,
      subjectData,
    },
  };
};

export default SubjectPage;
