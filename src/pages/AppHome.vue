<script>
import axios from 'axios';
export default {
    name: 'app',
    components: {

    },
    data() {
        return {

            baseUrl: 'http://127.0.0.1:8000',
            doctors: [],
            specializations: null,
            selectedSpecializations: [],

        }
    },
    created() {

    },
    computed: {
        // filteredDoctor();
    },
    mounted() {
        this.getApiDoctor();
        this.getApiSpecializations();
    },
    watch: {
        selectedSpecializations: {
            handler: 'getApiDoctor',
            deep: true
        }
    },
    methods: {

        getApiDoctor(doctorApiPage) {
            const params = {
                page: doctorApiPage
            }

            // if (this.selectedSpecializations !== 'all') {
            //     params.specialization_id = this.selectedSpecializations
            // }
            if (this.selectedSpecializations.length > 0) {
                params.specializations_ids = this.selectedSpecializations.join(',');
            }

            axios.get(`${this.baseUrl}/api/doctors`, { params })
                .then((res) => {
                    this.doctors = res.data.doctors
                })
        },
        getApiSpecializations() {
            axios.get(`${this.baseUrl}/api/specializations`)
                .then(res => {
                    this.specializations = res.data.specializations
                })
        }

    }
}
</script>
<template>
    <h1>Ciao mondo</h1>
    <!-- <div class="mb-3">
        <label for="" class="form-label">Specializations Filter</label>
        <select @change="getApiDoctor()" v-model="selectedSpecializations" class="form-select form-select-lg" name="" id="">
            <option value="all"> -- All -- </option>
            <option v-for="(elem, index) in specializations" :key="index" :value="elem.id">{{ elem.name }}</option>
        </select>
    </div> -->
    <div class="mb-3">
        <h2>Technologies Filter</h2>
        <label for="" v-for="(elem, index) in specializations" :key="index">
            <input type="checkbox" :value="elem.id" v-model="selectedSpecializations">
            {{ elem.name }}
        </label>
    </div>
    <div>
        <div v-for="(doctor, index) in doctors" :key="index">
            <h2>{{ doctor.name }}</h2>
            <ul>
                <span class="text-bold">Specializations:</span>
                <li v-for="(specialization, index) in doctor.specializations" :key="index">{{ specialization.name }}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>