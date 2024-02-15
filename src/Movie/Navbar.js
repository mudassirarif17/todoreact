import React from 'react';

const Navbar1 = ({text , changeMode , mode}) => {
    return (
        <div>
            <nav style={{backgroundColor : mode == true ? `#121212` : 'white' , color : mode == true ? `white` : 'black'}} class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a style={{color : mode == true ? "white" : ""}} class="navbar-brand" href="#">Movie Flex</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a style={{color : mode == true ? "white" : ""}} class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a style={{color : mode == true ? "white" : ""}} class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a style={{color : mode == true ? "white" : ""}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a style={{color : mode == true ? "white" : ""}} class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <div class="form-check form-switch">
                            <input onClick={changeMode} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">{text}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar1