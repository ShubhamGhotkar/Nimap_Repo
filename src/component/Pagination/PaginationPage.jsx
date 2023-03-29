const PaginationPage = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pag-nav mr-3 ">
      <ul className="pagination mr-2 fixed">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item mr-1">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationPage;
