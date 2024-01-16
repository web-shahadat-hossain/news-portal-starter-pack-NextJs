import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const NewsDetailPage = ({ newsDetail }) => {

    if(!newsDetail){
        return <p>Loading......</p>
    }

    return (
        <Row style={{ marginTop: "80px", alignItems: "center" }}>
        <Col md={6} lg={12}>
          <Image
            alt="example"
            src={newsDetail?.image_url}
            width={500}
            height={300}
            responsive
          />
        </Col>
        <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
          <h1 style={{ fontSize: "30px" }}>{newsDetail?.title}</h1>
          <span
            style={{
              color: "gray",
              display: "block",
              fontSize: "20px",
            }}
          >
            <UserOutlined /> {newsDetail?.author}
          </span>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "100%",
            }}
          ></div>
    
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "gray",
              margin: "10px 0px",
              fontSize: "20px",
            }}
          >
            <span>
              <CalendarOutlined /> {newsDetail?.release_date}
            </span>
            <span>
              <CommentOutlined /> {newsDetail?.comment_count} Comments
            </span>
            <span>
              <ProfileOutlined /> {newsDetail?.category}
            </span>
          </p>
    
          <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
            {newsDetail?.description}
          </p>
        </Col>
      </Row>
       )
}
  export default NewsDetailPage;
  
  NewsDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  

//   export const getStaticPaths = async () =>{
//     const res= await fetch("http://localhost:5000/news");
//     const newses= await res.json();
//     const paths = newses.map((news) => ({
//         params: { newsId: news.id },
//       }))

//     return { paths, fallback: false }

//   }

// export const getStaticProps=async ({params})=>{
// const res= await fetch(`http://localhost:5000/news/${params.newsId}`);
// const news= await res.json();

// return {
//     props:{
//         newsDetail:news
//     }
// }
// } 
export const getServerSideProps=async ({params})=>{
const res= await fetch(`http://localhost:5000/news/${params.newsId}`);
const news= await res.json();

return {
    props:{
        newsDetail:news
    }
}
} 