import express from 'express';
import { UserSignUp, UserLogin, NgoSignUp , DonateUser, VolunteerUser, NGOLogin, GetDonations, RaiseFund, ContributeFunds, postVolOpp, viewAllVolOpps, updateVolOpp} from './../controller/users_controller.js'
import { ngoMailSend, delete_volunteer, updateVolunteer, mail, view_donations, view_volunteers, getfunds, getAmounts, view_user_donations, update_donation, delete_donation, view_user_volunteers} from '../service/services.js';

const router = express.Router();

router.route('/Users/SignUp').post(UserSignUp);
router.route('/Users/Login').get(UserLogin);
router.route('/Ngos/Login').get(NGOLogin);
router.route('/Ngos/SignUp').post(NgoSignUp);
router.route('/Users/Donation').post(DonateUser);
router.route('/Users/Volunteer/mail').get(mail);
router.route('/Users/Volunteer').post(VolunteerUser)
router.route('/Users/Fund/:userId/mail').post(mail);
router.route('/Ngos/Donation').get(view_donations);
router.route('/Ngos/GetVolunteers').get(view_volunteers);
router.route('/Ngos/RaiseFund').post(RaiseFund);
router.route('/Users/Fund').get(getfunds);
router.route('/Users/Payment').put(ContributeFunds);
router.route('/Ngos/FundStatus').get(getAmounts);

router.route('/Ngos/RequestVolunteer').post(postVolOpp);
router.route('/NGORequirements').get(viewAllVolOpps);

router.route('/Users/GetUsersDonations').get(view_user_donations);
router.route('/Users/GetUsersVolunteer').get(view_user_volunteers);
router.route('/Users/UpdateDonation').put(update_donation);
router.route('/Users/DeleteDonation').delete(delete_donation);
router.route('/Users/DeleteVolunteer').delete(delete_volunteer);
router.route('/Users/UpdateVolunteer').put(updateVolunteer);
router.route('/Ngos/mail').get(ngoMailSend);

router.route('/Ngos/UpdateVolOpp').put(updateVolOpp);

export default router;