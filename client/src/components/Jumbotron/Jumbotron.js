import React from "react";
import "./Jumbotron.css";

const Jumbotron = ()   => (
  
  <div class="container">
  
    <div class="jumbotron" >

        <h1 class="text-center">
          <strong>
          <i class="fa fa-newspaper-o"></i> New York Times Article Search</strong>
        </h1>

    </div>

    <div class="row">
      <div class="col-sm-12">

        <br></br>

        <div class="panel panel-primary">

               <div class="panel-heading">
                   <h3 class="panel-title">
                   <strong>
                    <i class="fa  fa-list-alt"></i> Search Parameters</strong>
                    </h3>
               </div>

               <div class="panel-body">

                  <form>

                    <div class="form-group">
                        <label for="search">Search Term:</label>
                        {/* <input type="text" class="form-control" id="search-term"> </input> */}
                    </div>


                    <div class="form-group">
                      <label for="pwd">Number of Records to Retrieve:</label>
                        <select class="form-control" id="article-count">
                            <option value="1">1</option>
                            <option value="5" selected>5</option>
                            <option value="10">10</option>
                         </select>
                    </div>


                    <div class="form-group">
                      <label for="start-year">Start Year (Optional):</label>
                        {/* <input type="text" class="form-control" id="start-year"> </input> */}
                    </div>


                    <div class="form-group">
                      <label for="end-year">End Year (Optional):</label>
                        {/* <input type="text" class="form-control" id="end-year"> </input> */}
                    </div>


                    <button type="submit" class="btn btn-default" id="run-search">
                      <i class="fa fa-search"></i> Search</button>

                    <button type="button" class="btn btn-default" id="clear-all">
                      <i class="fa fa-trash"></i> Clear Results</button>

                  </form>
                </div>
        </div>
      </div>
    </div>
    
  
    <div class="row">
      <div class="col-sm-12">
        <br></br>


        <div class="panel panel-primary">


          <div class="panel-heading">
            <h3 class="panel-title">
              <strong>
                <i class="fa fa-table"></i> Top Articles</strong>
            </h3>
          </div>


          <div class="panel-body" id="well-section">
          </div>

        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-sm-12">

        <hr></hr>
        
        <h5 class="text-center">
          <small>Made with lots and lots of
            <i class="fa fa-heart"></i>
          </small>
        </h5>

      </div>
    </div>
  

  </div>


  



);

export default Jumbotron; 
