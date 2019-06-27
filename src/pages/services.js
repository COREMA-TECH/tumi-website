import React from "react"
import PostPage from '../components/postPage';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

import banner from "../images/hotel-sign-t.jpg";
import service from '../images/services-content.jpeg';

const Services = () => {
  
  const renderLeftBlock = _ => {
    return(
      <>
        <p>
          Tumi Staffing allows you to add capacity without the additional employment expenses of advertising, background checks, screenings, interviewing and reference checking. This also reduces your ongoing expenses such as vacation, sick pay, comp time, and insurance, and our prices make our staffing solutions competitive with adding full-time employees to your staff.
        </p>
        <p>
          Tumi Staffing utilizes strict selection criteria for its employees to ensure that we provide the highest quality workers. We stress honesty, work ethic and dependability in our selection process and employ those who demonstrate these qualities. We then complement these selection criteria by conducting background checks on all potential employees.
        </p>

        <table className="Services-table" style={{marginTop: '1.5rem'}} width="100%" border="1" cellspacing="0" cellpadding="0">
          <tbody>
              <tr>
                  <th style={{fontWeight: 'bold'}}>Operations</th>
                  <th style={{fontWeight: 'bold'}}>F&amp;B</th>
                  <th style={{fontWeight: 'bold'}}>Other Departments</th>
              </tr>
              <tr>
                  <td>Housekeeping</td>
                  <td>Dish Washers</td>
                  <td>Grounds &amp; Landscaping</td>
              </tr>
              <tr>
                  <td>Laundry Attendants</td>
                  <td>Bussers</td>
                  <td>Golf course maintenance</td>
              </tr>
              <tr>
                  <td>Public Area Attendants</td>
                  <td>Waitstaff</td>
                  <td>Recreation</td>
              </tr>
              <tr>
                  <td>Housekeeping Supervisors</td>
                  <td>Stewarding</td>
                  <td>Pool Attendants</td>
              </tr>
              <tr>
                  <td>Maintenance</td>
                  <td>Bartenders</td>
                  <td>Administrative</td>
              </tr>
              <tr>
                  <td>Bellmen</td>
                  <td>Banquet Houseman</td>
                  <td>Data entry</td>
              </tr>
              <tr>
                  <td>Front Desk</td>
                  <td>Banquet Servers</td>
                  <td>Accounting</td>
              </tr>
              <tr>
                  <td>Night Audit</td>
                  <td>Cooks</td>
                  <td>Sales</td>
              </tr>
          </tbody>
        </table>
      </>
    )
  }

  return (  
    <Layout>
      <SEO title="Services" />
      <NavBlock />
      <PostPage
        pageTitle="Services"
        pageSubtitle="Staffing for hotels has very unique requirements including the need for service oriented people."
        leftText=""
        banner={banner}
        contentPic={service}
        renderLeftBlock={renderLeftBlock}
      />
    </Layout>
  )
}
export default Services
