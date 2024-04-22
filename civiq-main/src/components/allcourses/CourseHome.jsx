import React from "react"
import Back from "../common/back/Back"
import "./courses.css"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <Back title='Admin Page' />
      {/* <CoursesCard /> */}
      {/* <OnlineCourses /> */}
      
      <div class="box">
       <div class="large">
        <div class="dubai">
          <div>
            <p class="p1">Activated ACMS:</p>
            <p class="p2">57</p>
          </div>
        </div>
        <div class="leave">
          <div>
            <p class="p1">ACMS in Emergency</p>
            <p class="p2_leave">1</p>
          </div>
        </div>

        <div class="seb">
          <div>
            <p class="seb_p1">Location:</p>
            <p class="seb_p2">Vasant Vihar<br/>
              Church Road
            </p>
          </div>
        </div>
       </div>
      </div>

       <div class="section">
      <div class="card1">
        <div class="int_card1">
          <img src="Ellipse 6.png" alt=""/>
          <p class="p1_card1">Khushi</p>
          <p class="p2_card2">+91 12345678</p>
        </div>
        </div>

        <div class="card2">
          <div class="int_card2">
            <img src="Ellipse 6.png" alt=""/>
            <p class="p1_card1">Mridul</p>
            <p class="p2_card2">+91 12345678</p>
          </div>
          </div>

          <div class="card3">
            <div class="int_card3">
              <img src="Ellipse 6.png" alt=""/>
              <p class="p1_card1">Gautam</p>
              <p class="p2_card2">+91 12345678</p>
            </div>
            </div>

            <div class="card4">
              <div class="int_card4">
                <img src="Ellipse 6.png" alt=""/>
                <p class="p1_card1">Ananya</p>
                <p class="p2_card2">+91 12345678</p>
              </div>
              </div>

              <div class="card5">
                <div class="int_card5">
                  <img src="Ellipse 6.png" alt=""/>
                  <p class="p1_card1">Gaurav</p>
                  <p class="p2_card2">+91 12345678</p>
                </div>
                </div>
                </div>
    </>
  )
}

export default CourseHome
