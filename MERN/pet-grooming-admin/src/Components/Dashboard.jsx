import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Dashboard() {
  return (

    <div>
      <section className="dashboard page p-3 m-3"><br /><br />
      <div className="row justify-content-evenly">
  {/* Welcome Section */}
  <div className="col-4 border shadow p-3 m-3 text-center w-25" style={{backgroundColor:"lightskyblue"}}>
    <img 
      src="https://cdn.britannica.com/37/91837-050-2CC301F9/Children-pet-dog.jpg" 
      width="500" 
      alt="Children with a pet dog" 
      className="rounded mb-3"
    />
    <div>
      <p className="fw-bold">Welcome,</p>
      <h5>Admin Akhil MG</h5>
      <p className="mt-2">
        Welcome to the pet grooming dashboard! Manage your appointments, pets, and grooming staff efficiently.
      </p>
    </div>
  </div>

  {/* Total Appointments Section */}
  <div className="col-4 border shadow p-3 w-25 m-3 text-center" style={{backgroundColor:"aqua"}}>
    <p className="fw-bold">Total Appointments</p>
    <h3 className="display-4">200</h3>
  </div>

  {/* Registered Groomers Section */}
  <div className="col-4 border shadow p-3 w-25 m-3 text-center " style={{backgroundColor:"aquamarine"}}>
    <p className="fw-bold">Registered Groomers</p>
    <h3 className="display-4">5</h3>
  </div>
</div>
<br /><br />

  <div className="banner">
    <h2 className='text-center fw-bold fs-1'>Appointments</h2>
    <br />
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Invoice #</th>
					<th className="p-3">Client</th>
					<th className="p-3">Issued</th>
					<th className="p-3">Due</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Tesla Inc.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$275</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Coca Cola co.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$8,950,500</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Nvidia Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$98,218</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
  </div>
</section>

    </div>
    // <div className={`${SidebarToggle ? "" : " ml-64 "}w-full`}>
    //     {/* <Header SidebarToggle = {SidebarToggle}
    //   setSidebarToggle = {setSidebarToggle}/> */}

    //   <div><h1>Welcome to Dashborad</h1></div>
    // </div>
  )
}

export default Dashboard