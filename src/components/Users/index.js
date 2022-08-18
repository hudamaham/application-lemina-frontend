import React, { useEffect } from "react";
import users from "../data/data-users";
import { BsCardList, BsFillGrid1X2Fill } from "react-icons/bs";
import { BiSort, BiDotsHorizontalRounded } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { SwitchMode, toGrid, ToList } from "../../app/features/local-config";
import { NavLink } from "react-router-dom";
export default function Users() {
  const dispatch = useDispatch();
  const show = () => {
    document.getElementById("slide").classList.remove("d-none");
  };

  return (
    <>
      <div class="app-content  ">
        <div className="d-flex flex-row  justify-content-between mb-3">
          <h1 class="app-content-headerText">Users</h1>
          <div class="action-buttons">
            <button
              class="mode-switch"
              title="Switch Theme"
              onClick={() => dispatch(SwitchMode())}
            >
              <svg
                class="moon"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            <div class="action-buttons">
              <button class="menu-button" onClick={() => show()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="menu"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="app-content-header justify-content-end  fixed">
          <NavLink to={"new"}>
            {" "}
            <button class="app-content-headerButton">Ajouter user</button>
          </NavLink>
        </div>
        <div class="app-content-actions fixed">
          <input class="search-bar" placeholder="Search..." type="text" />
          <div class="app-content-actions-wrapper">
            <button
              class="action-button list active"
              title="List View"
              onClick={() => dispatch(ToList())}
            >
              <BsCardList />
            </button>
          </div>
        </div>
        <div
          class="products-area-wrapper tableView  "
          style={{ overflow: "scroll", height: "80vh" }}
        >
          <div class="products-header">
            <div class="product-cell category">
              Id
              <button class="sort-button">
                <BiSort />
              </button>
            </div>
            <div class="product-cell image">
              User nom et prenom
              <button class="sort-button">
                <BiSort />
              </button>
            </div>
          </div>

          {users.map((user, position) => {
            return (
              <div class="products-row" key={position}>
                <button class="cell-more-button">
                  <BiDotsHorizontalRounded />
                </button>

                <div class="product-cell category">
                  <span class="cell-label">Id :</span>
                  {user.id}
                </div>
                <div class="product-cell image  t ">
                  <img src={user.image} />
                  <span>
                    {" "}
                    {user.nom} {user.prenom}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
