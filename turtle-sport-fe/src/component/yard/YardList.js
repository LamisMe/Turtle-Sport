import { useEffect, useState } from "react";
import * as YardService from "../../service/YardService";
import { Link } from "react-router-dom";
import { showMsgWarning } from "../../service/YardService";
import queryString from "query-string";

export function YardList() {
  const [yards, setYards] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { query } = queryString.parse(window.location.search);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);


  const getAllYard = async () => {
    let res = await YardService.YardList(currentPage, nameSearch);
    setYards(res.data.content);
    setTotalPages(res.data.totalPages);
  };

  const handleSearch = () => {
    // Thay đổi URL
    window.history.pushState(null, "", `/results?query=${nameSearch}`);
  };

  const handlerChangeSearch = (value) => {
    setShowResults(false);

    setNameSearch(value);
  };

  const prePage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    setRefresh((refresh) => !refresh);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    setRefresh((refresh) => !refresh);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      search();
    }
  };

  const dontContainsSpecialCharacters = (string) => {
    const regex = /^[^!@#$%^&*()_+={}\[\]:;,<.>?\\\/'"`]*$/;
    return regex.test(string);
  };

  const search = () => {
    handleSearch();
    setShowResults(true);
    if (dontContainsSpecialCharacters(nameSearch)) {
      getAllYard().then();
    } else {
      showMsgWarning("Tên Tìm Kiếm Không Hợp Lệ");
    }
  };

  useEffect(() => {
    getAllYard();
    const fetchSearchResults = async () => {
      const response = await fetch(`API_URL?query=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    };
    fetchSearchResults();
  }, [currentPage]);

  return (
    <>
     
    </>
  );
}
