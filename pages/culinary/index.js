import Card from '../../components/Card';
export default function Culinary({ blogs, authors }) {
  return (
    <div className="px-10 sm:px-20 md:px-28 lg:px-44 scroll-smooth py-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-14">
      {
        blogs.map(blog => {
          let au = null;
          authors.map(author => {
            if (blog["id-author"] === author.id) {
              au = author;
            }
            return au;
          })
          return <Card key={blog["id-post"]} blog={blog} author={au} index={null}></Card>
        })
      }
    </div>
  )
}
export async function getServerSideProps() {
  const responseBlogs = await fetch('http://localhost:3001/posts?category=culinary');
  const dataBlogs = await responseBlogs.json();
  const responseAuthors = await fetch('http://localhost:3001/authors');
  const dataAuthors = await responseAuthors.json();
  return {
    props: {
      blogs: dataBlogs,
      authors: dataAuthors,
    }
  }
}