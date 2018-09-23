const selectData = [
    {
        "SOC_Field": "47-0000",
        "Job_Field": "Construction and Extraction Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "47-1000",
            "Job_Title": "Supervisors of Construction and Extraction Workers"
        }, {"SOC_Title": "47-2000", "Job_Title": "Construction Trades Workers"}, {
            "SOC_Title": "47-3000",
            "Job_Title": "Helpers, Construction Trades"
        }, {"SOC_Title": "47-4000", "Job_Title": "Other Construction and Related Workers"}, {
            "SOC_Title": "47-5000",
            "Job_Title": "Extraction Workers"
        }]
    },
    {
        "SOC_Field": "11-0000",
        "Job_Field": "Management Occupations",
        "Sub_Jobs": [{"SOC_Title": "11-1000", "Job_Title": "Top Executives"}, {
            "SOC_Title": "11-2000",
            "Job_Title": "Advertising, Marketing, Promotions, Public Relations, and Sales Managers"
        }, {"SOC_Title": "11-3000", "Job_Title": "Operations Specialties Managers"}, {
            "SOC_Title": "11-9000",
            "Job_Title": "Other Management Occupations"
        }]
    },
    {
        "SOC_Field": "21-0000",
        "Job_Field": "Community and Social Service Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "21-1000",
            "Job_Title": "Counselors, Social Workers, and Other Community and Social Service Specialists"
        }, {"SOC_Title": "21-2000", "Job_Title": "Religious Workers"}]
    },
    {
        "SOC_Field": "45-0000",
        "Job_Field": "Farming, Fishing, and Forestry Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "45-1000",
            "Job_Title": "Supervisors of Farming, Fishing, and Forestry Workers"
        }, {"SOC_Title": "45-2000", "Job_Title": "Agricultural Workers"}, {
            "SOC_Title": "45-3000",
            "Job_Title": "Fishing and Hunting Workers"
        }, {"SOC_Title": "45-4000", "Job_Title": "Forest, Conservation, and Logging Workers"}]
    },
    {
        "SOC_Field": "15-0000",
        "Job_Field": "Computer and Mathematical Occupations",
        "Sub_Jobs": [{"SOC_Title": "15-1000", "Job_Title": "Computer Occupations"}, {
            "SOC_Title": "15-2000",
            "Job_Title": "Mathematical Science Occupations"
        }]
    },
    {
        "SOC_Field": "25-0000",
        "Job_Field": "Educational Instruction and Library Occupations",
        "Sub_Jobs": [{"SOC_Title": "25-1000", "Job_Title": "Postsecondary Teachers"}, {
            "SOC_Title": "25-2000",
            "Job_Title": "Preschool, Elementary, Middle, Secondary, and Special Education Teachers"
        }, {"SOC_Title": "25-3000", "Job_Title": "Other Teachers and Instructors"}, {
            "SOC_Title": "25-4000",
            "Job_Title": "Librarians, Curators, and Archivists"
        }, {"SOC_Title": "25-9000", "Job_Title": "Other Educational Instruction and Library Occupations"}]
    },
    {
        "SOC_Field": "17-0000",
        "Job_Field": "Architecture and Engineering Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "17-1000",
            "Job_Title": "Architects, Surveyors, and Cartographers"
        }, {"SOC_Title": "17-2000", "Job_Title": "Engineers"}, {
            "SOC_Title": "17-3000",
            "Job_Title": "Drafters, Engineering Technicians, and Mapping Technicians"
        }]
    },
    {
        "SOC_Field": "51-0000",
        "Job_Field": "Production Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "51-1000",
            "Job_Title": "Supervisors of Production Workers"
        }, {"SOC_Title": "51-2000", "Job_Title": "Assemblers and Fabricators"}, {
            "SOC_Title": "51-3000",
            "Job_Title": "Food Processing Workers"
        }, {"SOC_Title": "51-4000", "Job_Title": "Metal Workers and Plastic Workers"}, {
            "SOC_Title": "51-5100",
            "Job_Title": "Printing Workers"
        }, {"SOC_Title": "51-6000", "Job_Title": "Textile, Apparel, and Furnishings Workers"}, {
            "SOC_Title": "51-7000",
            "Job_Title": "Woodworkers"
        }, {"SOC_Title": "51-8000", "Job_Title": "Plant and System Operators"}, {
            "SOC_Title": "51-9000",
            "Job_Title": "Other Production Occupations"
        }]
    },
    {
        "SOC_Field": "53-0000",
        "Job_Field": "Transportation and Material Moving Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "53-1000",
            "Job_Title": "Supervisors of Transportation and Material Moving Workers"
        }, {"SOC_Title": "53-2000", "Job_Title": "Air Transportation Workers"}, {
            "SOC_Title": "53-3000",
            "Job_Title": "Motor Vehicle Operators"
        }, {"SOC_Title": "53-4000", "Job_Title": "Rail Transportation Workers"}, {
            "SOC_Title": "53-5000",
            "Job_Title": "Water Transportation Workers"
        }, {"SOC_Title": "53-6000", "Job_Title": "Other Transportation Workers"}, {
            "SOC_Title": "53-7000",
            "Job_Title": "Material Moving Workers"
        }]
    },
    {
        "SOC_Field": "43-0000",
        "Job_Field": "Office and Administrative Support Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "43-1000",
            "Job_Title": "Supervisors of Office and Administrative Support Workers"
        }, {"SOC_Title": "43-2000", "Job_Title": "Communications Equipment Operators"}, {
            "SOC_Title": "43-3000",
            "Job_Title": "Financial Clerks"
        }, {"SOC_Title": "43-4000", "Job_Title": "Information and Record Clerks"}, {
            "SOC_Title": "43-5000",
            "Job_Title": "Material Recording, Scheduling, Dispatching, and Distributing Workers"
        }, {"SOC_Title": "43-6000", "Job_Title": "Secretaries and Administrative Assistants"}, {
            "SOC_Title": "43-9000",
            "Job_Title": "Other Office and Administrative Support Workers"
        }]
    },
    {
        "SOC_Field": "49-0000",
        "Job_Field": "Installation, Maintenance, and Repair Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "49-1000",
            "Job_Title": "Supervisors of Installation, Maintenance, and Repair Workers"
        }, {
            "SOC_Title": "49-2000",
            "Job_Title": "Electrical and Electronic Equipment Mechanics, Installers, and Repairers"
        }, {
            "SOC_Title": "49-3000",
            "Job_Title": "Vehicle and Mobile Equipment Mechanics, Installers, and Repairers"
        }, {"SOC_Title": "49-9000", "Job_Title": "Other Installation, Maintenance, and Repair Occupations"}]
    },
    {
        "SOC_Field": "27-0000",
        "Job_Field": "Arts, Design, Entertainment, Sports, and Media Occupations",
        "Sub_Jobs": [{"SOC_Title": "27-1000", "Job_Title": "Art and Design Workers"}, {
            "SOC_Title": "27-2000",
            "Job_Title": "Entertainers and Performers, Sports and Related Workers"
        }, {"SOC_Title": "27-3000", "Job_Title": "Media and Communication Workers"}, {
            "SOC_Title": "27-4000",
            "Job_Title": "Media and Communication Equipment Workers"
        }]
    },
    {
        "SOC_Field": "29-0000",
        "Job_Field": "Healthcare Practitioners and Technical Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "29-1000",
            "Job_Title": "Healthcare Diagnosing or Treating Practitioners"
        }, {"SOC_Title": "29-2000", "Job_Title": "Health Technologists and Technicians"}, {
            "SOC_Title": "29-9000",
            "Job_Title": "Other Healthcare Practitioners and Technical Occupations"
        }]
    },
    {
        "SOC_Field": "13-0000",
        "Job_Field": "Business and Financial Operations Occupations",
        "Sub_Jobs": [{"SOC_Title": "13-1000", "Job_Title": "Business Operations Specialists"}, {
            "SOC_Title": "13-2000",
            "Job_Title": "Financial Specialists"
        }]
    },
    {
        "SOC_Field": "37-0000",
        "Job_Field": "Building and Grounds Cleaning and Maintenance Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "37-1000",
            "Job_Title": "Supervisors of Building and Grounds Cleaning and Maintenance Workers"
        }, {"SOC_Title": "37-2000", "Job_Title": "Building Cleaning and Pest Control Workers"}, {
            "SOC_Title": "37-3000",
            "Job_Title": "Grounds Maintenance Workers"
        }]
    },
    {
        "SOC_Field": "55-0000",
        "Job_Field": "Military Specific Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "55-1000",
            "Job_Title": "Military Officer Special and Tactical Operations Leaders"
        }, {"SOC_Title": "55-2000", "Job_Title": "First-Line Enlisted Military Supervisors"}, {
            "SOC_Title": "55-3000",
            "Job_Title": "Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members"
        }]
    },
    {
        "SOC_Field": "23-0000",
        "Job_Field": "Legal Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "23-1000",
            "Job_Title": "Lawyers, Judges, and Related Workers"
        }, {"SOC_Title": "23-2000", "Job_Title": "Legal Support Workers"}]
    },
    {
        "SOC_Field": "31-0000",
        "Job_Field": "Healthcare Support Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "31-1100",
            "Job_Title": "Home Health and Personal Care Aides; and Nursing Assistants, Orderlies, and Psychiatric Aides"
        }, {
            "SOC_Title": "31-2000",
            "Job_Title": "Occupational Therapy and Physical Therapist Assistants and Aides"
        }, {"SOC_Title": "31-9000", "Job_Title": "Other Healthcare Support Occupations"}]
    },
    {
        "SOC_Field": "19-0000",
        "Job_Field": "Life, Physical, and Social Science Occupations",
        "Sub_Jobs": [{"SOC_Title": "19-1000", "Job_Title": "Life Scientists"}, {
            "SOC_Title": "19-2000",
            "Job_Title": "Physical Scientists"
        }, {"SOC_Title": "19-3000", "Job_Title": "Social Scientists and Related Workers"}, {
            "SOC_Title": "19-4000",
            "Job_Title": "Life, Physical, and Social Science Technicians"
        }, {"SOC_Title": "19-5000", "Job_Title": "Occupational Health and Safety Specialists and Technicians"}]
    },
    {
        "SOC_Field": "39-0000",
        "Job_Field": "Personal Care and Service Occupations",
        "Sub_Jobs": [{
            "SOC_Title": "39-1000",
            "Job_Title": "Supervisors of Personal Care and Service Workers"
        }, {"SOC_Title": "39-2000", "Job_Title": "Animal Care and Service Workers"}, {
            "SOC_Title": "39-3000",
            "Job_Title": "Entertainment Attendants and Related Workers"
        }, {"SOC_Title": "39-4000", "Job_Title": "Funeral Service Workers"}, {
            "SOC_Title": "39-5000",
            "Job_Title": "Personal Appearance Workers"
        }, {"SOC_Title": "39-6000", "Job_Title": "Baggage Porters, Bellhops, and Concierges"}, {
            "SOC_Title": "39-7000",
            "Job_Title": "Tour and Travel Guides"
        }, {"SOC_Title": "39-9000", "Job_Title": "Other Personal Care and Service Workers"}]
    },
            {
                "SOC_Field": "35-0000",
                "Job_Field": "Food Preparation and Serving Related Occupations",
                "Sub_Jobs": [{
                    "SOC_Title": "35-1000",
                    "Job_Title": "Supervisors of Food Preparation and Serving Workers"
                }, {"SOC_Title": "35-2000", "Job_Title": "Cooks and Food Preparation Workers"}, {
                    "SOC_Title": "35-3000",
                    "Job_Title": "Food and Beverage Serving Workers"
                }, {"SOC_Title": "35-9000", "Job_Title": "Other Food Preparation and Serving Related Workers"}]
            },
            {
                "SOC_Field": "33-0000",
                "Job_Field": "Protective Service Occupations",
                "Sub_Jobs": [{
                    "SOC_Title": "33-1000",
                    "Job_Title": "Supervisors of Protective Service Workers"
                }, {
                    "SOC_Title": "33-2000",
                    "Job_Title": "Firefighting and Prevention Workers"
                }, {"SOC_Title": "33-3000", "Job_Title": "Law Enforcement Workers"}, {
                    "SOC_Title": "33-9000",
                    "Job_Title": "Other Protective Service Workers"
                }]
            },
            {
                "SOC_Field": "41-0000",
                "Job_Field": "Sales and Related Occupations",
                "Sub_Jobs": [{
                    "SOC_Title": "41-1000",
                    "Job_Title": "Supervisors of Sales Workers"
                }, {"SOC_Title": "41-2000", "Job_Title": "Retail Sales Workers"}, {
                    "SOC_Title": "41-3000",
                    "Job_Title": "Sales Representatives, Services"
                }, {
                    "SOC_Title": "41-4000",
                    "Job_Title": "Sales Representatives, Wholesale and Manufacturing"
                }, {"SOC_Title": "41-9000", "Job_Title": "Other Sales and Related Workers"}]
            }
        ];

const stateNames = ["AA", "AE", "AK", "AL", "AP", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI",
    "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE",
    "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA",
    "VI", "VT", "WA", "WI", "WV", "WY"];

function getStates() {
    return stateNames;
}

function getFields() {
    return selectData.map(j => j.Job_Field);
}

function getFieldJobs(field) {
    const fieldJobs = selectData.filter(j => j.Job_Field.localeCompare(field) === 0);
    if (fieldJobs.length > 0) {
        return fieldJobs[0].Sub_Jobs.map(job => job.Job_Title);
    }
    return []
}

function getSOC(field, job) {
    if (field.localeCompare('All') === 0) return 'All';
    const fieldData = selectData.filter(j => j.Job_Field.localeCompare(field) === 0)[0];
    let code = '';

    if (job === null || job.localeCompare('All') === 0) {
        code = fieldData.SOC_Field;
    } else {
        code = fieldData.Sub_Jobs.filter(j => j.Job_Title.localeCompare(job) === 0)[0];
        code = code.SOC_Title;
    }

    return code.replace(/0/g, '');
}