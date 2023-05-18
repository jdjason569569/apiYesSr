--
-- PostgreSQL database dump
--

-- Dumped from database version 13.11
-- Dumped by pg_dump version 15.2

-- Started on 2023-05-17 22:23:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 16395)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16396)
-- Name: images_id_images_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.images_id_images_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_images_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 16398)
-- Name: images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.images (
    date_register date,
    name character varying(300),
    id_users integer,
    id_images integer DEFAULT nextval('public.images_id_images_seq'::regclass) NOT NULL
);


ALTER TABLE public.images OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16402)
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.images_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16404)
-- Name: secuencia_task; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.secuencia_task
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.secuencia_task OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16406)
-- Name: task; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.task (
    id_task integer DEFAULT nextval('public.secuencia_task'::regclass) NOT NULL,
    name character varying(50),
    completed boolean,
    date_register date,
    id_users integer,
    expiration_date date
);


ALTER TABLE public.task OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16410)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16412)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id_users integer DEFAULT nextval('public.users_id_seq'::regclass) NOT NULL,
    register date NOT NULL,
    id_firebase character varying(100) NOT NULL,
    email character varying(150)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3006 (class 0 OID 16398)
-- Dependencies: 201
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.images (date_register, name, id_users, id_images) FROM stdin;
\.


--
-- TOC entry 3009 (class 0 OID 16406)
-- Dependencies: 204
-- Data for Name: task; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.task (id_task, name, completed, date_register, id_users, expiration_date) FROM stdin;
36	tarea 1	f	2023-05-17	5	2023-06-17
37	tarea 2	f	2023-05-17	5	2023-06-17
38	tarea 1	f	2023-05-17	6	2023-06-17
39	tarea 2	f	2023-05-17	6	2023-06-17
40	tarea 1	f	2023-05-17	7	2023-06-17
41	tarea 2	f	2023-05-17	7	2023-06-17
42	as	f	2023-05-17	8	2023-06-17
\.


--
-- TOC entry 3011 (class 0 OID 16412)
-- Dependencies: 206
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id_users, register, id_firebase, email) FROM stdin;
5	2023-05-16	zWSmz5zsWzMsiqooXPl51LLMeuD2	jdjason569develop@gmail.com
6	2023-05-17	4CHWR0U7VvSDIbLIQHLz3f3TBxj1	jdjason569@gmail.com
7	2023-05-17	QPjGaxZzCWbpAp6sLQQ4BZKBmLL2	jdsarria@unicauca.edu.co
8	2023-05-17	DYQwRmnHtth7LYL4ej3jw8UhrJk2	Bcorozco15@gmail.com
\.


--
-- TOC entry 3018 (class 0 OID 0)
-- Dependencies: 200
-- Name: images_id_images_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_id_images_seq', 37, true);


--
-- TOC entry 3019 (class 0 OID 0)
-- Dependencies: 202
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_id_seq', 1, false);


--
-- TOC entry 3020 (class 0 OID 0)
-- Dependencies: 203
-- Name: secuencia_task; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.secuencia_task', 42, true);


--
-- TOC entry 3021 (class 0 OID 0)
-- Dependencies: 205
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 8, true);


--
-- TOC entry 2868 (class 2606 OID 16417)
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id_images);


--
-- TOC entry 2870 (class 2606 OID 16419)
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (id_task);


--
-- TOC entry 2872 (class 2606 OID 16421)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_users);


--
-- TOC entry 2874 (class 2606 OID 16422)
-- Name: task fk_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT fk_users FOREIGN KEY (id_users) REFERENCES public.users(id_users);


--
-- TOC entry 2873 (class 2606 OID 16427)
-- Name: images images_id_users_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_id_users_fkey FOREIGN KEY (id_users) REFERENCES public.users(id_users);


--
-- TOC entry 3017 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2023-05-17 22:23:59

--
-- PostgreSQL database dump complete
--

