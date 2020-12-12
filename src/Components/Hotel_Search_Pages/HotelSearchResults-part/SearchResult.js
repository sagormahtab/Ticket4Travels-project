import React from 'react'
import "../HotelSearchResults-part/searchResult.css"

function SearchResult() {
    return (
        <div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <h4 className="font-bold mt-5">Searching Result</h4>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <h2 className="font-bold text-left">Your Search results in Name,Name</h2>
                                <p className="text-left">sep-23,2020 - sep-24,2020</p>
                            </div>
                            <div className="col-md-6 col-6">
                            <button type="button" class="btn btn-success searchButton"> Change Search</button>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default SearchResult
