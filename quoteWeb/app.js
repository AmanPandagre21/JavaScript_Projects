 const btn = document.getElementById("button");
      const quote = document.getElementById("quotes");
      const auth = document.getElementById("author");
      let apiData = "";

      const getNewQuote = () => {
        let rnum = Math.floor(Math.random() * 30);
        quote.innerText = apiData[rnum].text;
        apiData[rnum].author == null
          ? (auth.innerText = "By - unKnown")
          : (auth.innerText = "By - " + apiData[rnum].author);
      };

      const getQuotes = async () => {
        try {
          let res = await fetch("https://type.fit/api/quotes");
          apiData = await res.json();

          getNewQuote();
        } catch (error) {
          console.log(error);
        }
      };

      btn.addEventListener("click", getNewQuote);
      getQuotes();