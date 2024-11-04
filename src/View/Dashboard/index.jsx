// import logo from '../../image/logo1.png';
import { Image } from '../../Constants/ImagePaths';

function Dashboard() {
    return (
      <>
     <main id="main" class="main">

<div class="pagetitle">
  <h1>Dashboard</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section class="section dashboard">
  <div class="row">

    {/* <!-- Left side columns --> */}
    <div class="col-lg-12">
      <div class="row">

        {/* <!-- Sales Card --> */}
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card sales-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>
<a href="referedpatient.html">
            <div class="card-body">
              <h5 class="card-title">Refered Patients<span>| Today</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-person"></i>
                </div>
                <div class="ps-3">
                  <h6>145</h6>
                  <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>
          </a>

          </div>
        </div>
        {/* <!-- End Sales Card --> */}

        {/* <!-- Revenue Card --> */}
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card revenue-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>
<a href="appointment.html">
            <div class="card-body">
              <h5 class="card-title">Available Doctors <span>| Today</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  {/* <!-- <i class="bi bi-bar-chart"></i> --> */}
                  <i class="bi bi-person-plus"></i>
                </div>
                <div class="ps-3">
                  <h6>18</h6>
                  <span class="text-success small pt-1 fw-bold">99%</span> <span class="text-muted small pt-2 ps-1">Available</span>

                </div>
              </div>
            </div>
          </a>
          </div>
        </div>
        {/* <!-- End Revenue Card --> */}

        {/* <!-- Customers Card --> */}
        <div class="col-xxl-4 col-xl-12">

          <div class="card info-card customers-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>
<a href="patient.html">
            <div class="card-body">
              <h5 class="card-title">Patients Appointment <span>| Today</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-people"></i>
                </div>
                <div class="ps-3">
                  <h6>1244</h6>
                  <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                </div>
              </div>

            </div>
          </a>
          </div>

        </div>
        {/* <!-- End Customers Card --> */}
{/* <!-- Top Selling --> */}
<div class="col-12">
<div class="card top-selling overflow-auto">

<div class="filter">
  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
    <li class="dropdown-header text-start">
      <h6>Filter</h6>
    </li>

    <li><a class="dropdown-item" href="#">Today</a></li>
    <li><a class="dropdown-item" href="#">This Month</a></li>
    <li><a class="dropdown-item" href="#">This Year</a></li>
  </ul>
</div>

<div class="card-body pb-0">
  <h5 class="card-title">Doctors Availability <span>| Today</span></h5>

  <table class="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Photo</th>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Assign Patients</th>
        <th scope="col">Phone</th>
        <th scope="col">Speciality</th>
        <th scope="col">Availability</th>
        {/* <!-- <th scope="col">Revenue</th> --> */}
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><a href="#"><img src="assets/img/DOCTOR.png" alt="" /></a></th>
        <td>#878ff</td>
        <td>Arindam Bose</td>
        <td>6</td>
        <td>9878986778</td>
        <td>Dental</td>
        <td class="fw-bold"><span class="badge bg-success">Available</span></td>
        {/* <!-- <td>$5,828</td> --> */}
      </tr>
      <tr>
        <th scope="row"><a href="#"><img src="assets/img/doctor_2.jpg" alt=""/></a></th>
        <td>#878fd</td>
        <td>Bibhuti Panda</td>
        <td>16</td>
        <td>9878986776</td>
        <td>Eye</td>
        <td class="fw-bold"><span class="badge bg-warning">Onleave</span></td>
        {/* <!-- <td>$4,508</td> --> */}
      </tr>
      <tr>
        <th scope="row"><a href="#"><img src="assets/img/doctor_3.jpg" alt=""/></a></th>
        <td>#878fg</td>
        <td>Debi prasad mishra</td>
        <td>26</td>
        <td>9878986790</td>
        <td>Cergery</td>
        <td class="fw-bold"><span class="badge bg-danger">Not available</span></td>
        {/* <!-- <td>$4,366</td> --> */}
      </tr>
      <tr>
        <th scope="row"><a href="#"><img src="assets/img/doctor_4.jpg" alt=""/></a></th>
        <td>#878fj</td>
        <td>Sourav Das</td>
        <td>61</td>
        <td>9878986816</td>
        <td>ENT</td>
        <td class="fw-bold"><span class="badge bg-success">Available</span></td>
        {/* <!-- <td>$2,016</td> --> */}
      </tr>
      <tr>
        <th scope="row"><a href="#"><img src="assets/img/doctor_5.jpg" alt=""/></a></th>
        <td>#878fp</td>
        <td>Pratyush Moharana</td>
        <td>19</td>
        <td>9878986972</td>
        <td>General</td>
        <td class="fw-bold"><span class="badge bg-warning">Onleave</span></td>
        {/* <!-- <td>$3,239</td> --> */}
      </tr>
    </tbody>
  </table>

</div>

</div>
</div>
{/* <!-- End Top Selling --> */}
        {/* <!-- Reports --> */}
        <div class="col-12">
          <div class="card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Appointments <span>/Year by Year</span></h5>

              {/* <!-- Line Chart --> */}
              <div id="reportsChart"></div>

              {/* <script>
                document.addEventListener("DOMContentLoaded", () => {
                  new ApexCharts(document.querySelector("#reportsChart"), {
                    series: [ {
                      name: 'Patients',
                      data: [15, 11, 32, 18, 9, 24, 11]
                    }],
                    chart: {
                      height: 350,
                      type: 'area',
                      toolbar: {
                        show: false
                      },
                    },
                    markers: {
                      size: 4
                    },
                    colors: ['#4154f1'],
                    fill: {
                      type: "gradient",
                      gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.3,
                        opacityTo: 0.4,
                        stops: [0, 90, 100]
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 2
                    },
                    xaxis: {
                      type: 'year',
                      categories: ["2018-09-19", "2019-09-19", "2020-09-19", "2021-09-19", "2022-09-19", "2023-09-19", "2024-09-19"]
                    },
                    tooltip: {
                      x: {
                        format: 'dd/MM/yy HH:mm'
                      },
                    }
                  }).render();
                });
              </script> */}
              {/* <!-- End Line Chart --> */}

            </div>

          </div>
        </div>
        {/* <!-- End Reports --> */}

        {/* <!-- Recent Sales --> */}
        <div class="col-12">
          <div class="card recent-sales overflow-auto">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Patients <span>| Today</span></h5>

              <table class="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Check-Up</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Amrutanshu Pati</th>
                    <td>Eye</td>
                    <td>12-10-2018</td>
                    <td>12:10PM</td>
                    <td><span class="badge bg-success">Completed</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Manoj Kumar</th>
                    <td>ENT</td>
                    <td>12-10-2018</td>
                    <td>12:55PM</td>
                    <td><span class="badge bg-warning"> Pending</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Sangram keshari samanta</th>
                    <td>general</td>
                    <td>12-10-2018</td>
                    <td>2:30PM</td>
                    <td><span class="badge bg-danger">cancelled</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Lingraraj Sahoo</th>
                    <td>Eye</td>
                    <td>12-10-2018</td>
                    <td>12:10PM</td>
                    <td><span class="badge bg-success">Completed</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Malay Dalabehera</th>
                    <td>Eye</td>
                    <td>12-10-2018</td>
                    <td>12:10PM</td>
                    <td><span class="badge bg-success">Completed</span></td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div>
        {/* <!-- End Recent Sales --> */}

       

      </div>
    </div>
    {/* <!-- End Left side columns --> */}

    {/* <!-- Right side columns --> */}

    {/* <!-- End Right side columns --> */}

  </div>
</section>

</main>
      </>
   
);
}

export default Dashboard;