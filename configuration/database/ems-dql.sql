/* Employee Profile Creation */
INSERT INTO emsdb.employee_profile (first_name, last_name, age, email, phone_number, address, city, state, zipcode) VALUES ('Sun', 'Weiduo', 36, 'sunweiduo@gmail.com', null, null, 'New York', null, null);
INSERT INTO emsdb.employee_profile (first_name, last_name, age, email, phone_number, address, city, state, zipcode) VALUES ('College', 'Monroe', 45, 'manager@monroecollege.edu', '673-9873-0876', '434 Main St', 'New Rochelle', 'NY', '10801');
INSERT INTO emsdb.employee_profile (first_name, last_name, age, email, phone_number, address, city, state, zipcode) VALUES ('testing firstname', 'testing lastname', 48, 'testing-lastname@gmail.com', '564-989-0883', 'string', 'string', 'string', 'string');
INSERT INTO emsdb.employee_profile (first_name, last_name, age, email, phone_number, address, city, state, zipcode) VALUES ('Manager', 'James', 46, 'james@gmail.com', null, null, null, null, null);
INSERT INTO emsdb.employee_profile (first_name, last_name, age, email, phone_number, address, city, state, zipcode) VALUES ('HR', 'William', null, null, null, null, null, null, null);
INSERT INTO emsdb.employee_profile (first_name, last_name, age, email, phone_number, address, city, state, zipcode) VALUES ('HR', 'Manager', null, null, null, null, null, null, null);

/* Project Creation */
INSERT INTO emsdb.project (employee_id, manager_id, project_name, description, type, status, start_date, end_date, grade, feedback) VALUES (1, null, 'web ui', 'testing project', 'technical', 'to do', '2023-06-02 05:43:34', '2023-06-10 05:43:50', 3, '');
INSERT INTO emsdb.project (employee_id, manager_id, project_name, description, type, status, start_date, end_date, grade, feedback) VALUES (1, 2, 'testing project', 'string', 'string', 'completed', '2023-06-26 00:00:00', '2023-06-26 00:00:00', 10, 'no feedback');
INSERT INTO emsdb.project (employee_id, manager_id, project_name, description, type, status, start_date, end_date, grade, feedback) VALUES (1, 2, 'React application', 'string', 'string', 'in progress', '2023-06-26 00:00:00', '2023-06-26 00:00:00', 10, 'no feedback');


/* Verification Report Creation */
INSERT INTO emsdb.verification_report (employee_id, reporter_name, report_date, comment) VALUES (1, 'Sunitha', '2023-05-13 05:44:37', 'A testing Report');

/* Attendance Records */
INSERT INTO emsdb.attendance_record (employee_id, date, time) VALUES (1, '2023-06-09', 8);


/* Absent Request */
INSERT INTO emsdb.absent_request (absent_requestcol, employee_id, date, leave_time) VALUES ('string', 1, '2023-06-26', 100);
INSERT INTO emsdb.absent_request (absent_requestcol, employee_id, date, leave_time) VALUES ('string', 1, '2023-06-26', 10);
