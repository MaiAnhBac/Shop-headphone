document.addEventListener("DOMContentLoaded", () => {
    const provinceSelect = document.getElementById("province");
    const districtSelect = document.getElementById("district");
    const communeSelect = document.getElementById("commune");

    const fetchData = async () => {
        try {
            const res = await fetch('/db.json');
            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const populateSelect = (selectElement, dataArray) => {
        selectElement.innerHTML = '<option value="">Tỉnh / Thành phố</option>' +
            dataArray.map(item => `<option value="${item.idProvince}">${item.name}</option>`);
    };
    const populateSelectDistrict = (selectElement, dataArray) => {
        selectElement.innerHTML = '<option value="">Quận / Huyện</option>' +
        dataArray.map(item => `<option value="${item.idDistrict}">${item.name}</option>`);
    }
    const populateSelectCommune = (communeSelect, dataArray) => {
        communeSelect.innerHTML = '<option value="">Phường / Xã</option>' + 
            dataArray.map(item => `<option value="${item.idCommune}">${item.name}</option>`)
    }
    const populateDistrictSelect = (selectedProvinceId, districts) => {
        const filteredDistricts = districts.filter(district => district.idProvince === selectedProvinceId);
        populateSelectDistrict(districtSelect, filteredDistricts);
    };
    const populateCommuneSelect = (selectedDistrictId, communes) => {
        const filteredCommunes = communes.filter(commune => commune.idDistrict === selectedDistrictId)
        populateSelectCommune(communeSelect, filteredCommunes)
    }
    fetchData().then(data => {
        const provinces = data.province;
        const districts = data.district;
        const communes = data.commune
        populateSelect(provinceSelect, provinces);
        provinceSelect.addEventListener("change", () => {
            const selectedProvinceId = provinceSelect.value;
            populateDistrictSelect(selectedProvinceId, districts);
        });
        districtSelect.addEventListener("change", () => {
            const selectedDistrictId = districtSelect.value;
            populateCommuneSelect(selectedDistrictId, communes)
        })
    });
});
