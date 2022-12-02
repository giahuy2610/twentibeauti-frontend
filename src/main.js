import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./scss/_theme.scss";

//import 'primevue/resources/themes/saga-green/theme.css';
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import vClickOutside from "click-outside-vue3";
// import MegaMenu from 'primevue/megamenu';
import InputText from "primevue/inputtext";
import SelectButton from "primevue/selectbutton";
import ToastService from "primevue/toastservice";
import MultiSelect from "primevue/multiselect";
import Button from "primevue/button";
import MegaMenu from "primevue/megamenu";
import Badge from "primevue/badge";
import Sidebar from "primevue/sidebar";
import Card from "primevue/card";
import Rating from "primevue/rating";
import ProgressBar from "primevue/progressbar";
import BadgeDirective from "primevue/badgedirective";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Tree from "primevue/tree";
import Divider from "primevue/divider";
import AutoComplete from "primevue/autocomplete";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import ScrollPanel from "primevue/scrollpanel";
import Breadcrumb from "primevue/breadcrumb";
import InputMask from "primevue/inputmask";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; //optional for column grouping
import Row from "primevue/row";
import Chart from "primevue/chart";
import FileUpload from "primevue/fileupload";
import Editor from "primevue/editor";
import PanelMenu from "primevue/panelmenu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Skeleton from "primevue/skeleton";
import Paginator from "primevue/paginator";
import SplitButton from "primevue/splitbutton";
import Steps from "primevue/steps";
import Avatar from "primevue/avatar";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import ColorPicker from "primevue/colorpicker";
import DynamicDialog from 'primevue/dynamicdialog';
import DialogService from 'primevue/dialogservice';
import ToggleButton from 'primevue/togglebutton';
// import ButtonModule from 'primeng/button';
import ProgressSpinner from "primevue/progressspinner";
import Inplace from "primevue/inplace";
import Fieldset from "primevue/fieldset";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useCollectionStorePinia } from "./stores/store/collection";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa9FCzuXTUUWJsg_XpMxHOM7MyNjrB20I",
  authDomain: "twenti-882b8.firebaseapp.com",
  projectId: "twenti-882b8",
  storageBucket: "twenti-882b8.appspot.com",
  messagingSenderId: "460737526428",
  appId: "1:460737526428:web:a91e2f019c39dfe30acb59",
  measurementId: "G-QYG0GZD88R",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const options = {
  color: "#94c83d",
  failedColor: "#94c83d",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(PrimeVue);
app.use(router);
app.use(ToastService);
app.use(VueAxios, axios);
app.use(VueProgressBar, options);
app.use(vClickOutside);
app.component("Textarea", Textarea);
app.component("Calendar", Calendar);
app.component("Avatar", Avatar);
app.component("Steps", Steps);
app.component("SplitButton", SplitButton);
app.component("InputMask", InputMask);
app.component("Breadcrumb", Breadcrumb);
app.component("InputNumber", InputNumber);
app.component("RadioButton", RadioButton);
app.component("Checkbox", Checkbox);
app.component("Dropdown", Dropdown);
app.component("MultiSelect", MultiSelect);
app.component("Button", Button);
app.component("SelectButton", SelectButton);
app.component("InputText", InputText);
app.component("MegaMenu", MegaMenu);
app.component("Badge", Badge);
app.component("Sidebar", Sidebar);
app.component("Card", Card);
app.component("Rating", Rating);
app.component("ProgressBar", ProgressBar);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Divider", Divider);
app.component("Tree", Tree);
app.component("AutoComplete", AutoComplete);
app.component("InputSwitch", InputSwitch);
app.component("ScrollPanel", ScrollPanel);
app.component("DataTable", DataTable);
app.component("ColumnGroup", ColumnGroup);
app.component("Column", Column);
app.component("Row", Row);
app.component("Chart", Chart);
app.component("FileUpload", FileUpload);
app.component("Editor", Editor);
app.component("PanelMenu", PanelMenu);
app.component("Dialog", Dialog);
app.component("Toast", Toast);
app.component("Skeleton", Skeleton);
app.component("Paginator", Paginator);
app.component("ColorPicker", ColorPicker);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Inplace", Inplace);
app.component("Fieldset", Fieldset);
app.component("ToggleButton", ToggleButton);
app.component("DynamicDialog", DynamicDialog);


app.use(DialogService);
app.directive("badge", BadgeDirective);

axios.defaults.baseURL = "http://localhost:8000/api";
app.mount("#app");
