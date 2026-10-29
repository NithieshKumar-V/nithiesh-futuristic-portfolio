import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, validateContactForm, getCategoryLabel, generateResumeDocumentText } from './portfolioLogic.js';
import { PROJECTS_DATA } from '../data/portfolioData.js';

test('filterProjects returns all projects when category is "all" and query is empty', () => {
  const result = filterProjects(PROJECTS_DATA, 'all', '');
  assert.equal(result.length, PROJECTS_DATA.length);
});

test('filterProjects filters properly by category', () => {
  const aiProjects = filterProjects(PROJECTS_DATA, 'ai_ml', '');
  assert.ok(aiProjects.length > 0);
  assert.ok(aiProjects.every((p) => p.category === 'ai_ml'));

  const iotProjects = filterProjects(PROJECTS_DATA, 'iot_hardware', '');
  assert.ok(iotProjects.length > 0);
  assert.ok(iotProjects.every((p) => p.category === 'iot_hardware'));
});

test('filterProjects filters by search query matching title or tech', () => {
  const queryResult = filterProjects(PROJECTS_DATA, 'all', 'YOLO');
  assert.ok(queryResult.length >= 1);
  assert.ok(queryResult.some((p) => p.id === 'roadwise'));

  const fastApiResult = filterProjects(PROJECTS_DATA, 'all', 'FastAPI');
  assert.ok(fastApiResult.length >= 1);
  assert.ok(fastApiResult.some((p) => p.id === 'code-analyzer'));
});

test('validateContactForm rejects empty inputs', () => {
  const emptyResult = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.subject);
  assert.ok(emptyResult.errors.message);
});

test('validateContactForm validates email syntax correctly', () => {
  const invalidEmailResult = validateContactForm({
    name: 'Nithiesh',
    email: 'not-an-email',
    subject: 'Project inquiry',
    message: 'Hello, I would like to discuss an opportunity.',
  });
  assert.equal(invalidEmailResult.isValid, false);
  assert.ok(invalidEmailResult.errors.email);

  const validResult = validateContactForm({
    name: 'Recruiter',
    email: 'recruiter@techcorp.com',
    subject: 'Internship Opportunity',
    message: 'We are very impressed by your projects and would love to connect.',
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('getCategoryLabel returns correct descriptive labels', () => {
  assert.equal(getCategoryLabel('ai_ml'), 'AI & Computer Vision');
  assert.equal(getCategoryLabel('fullstack'), 'Full-Stack Web');
  assert.equal(getCategoryLabel('all'), 'All Projects');
});

test('generateResumeDocumentText contains key verified credentials', () => {
  const text = generateResumeDocumentText();
  assert.ok(text.includes('NITHIESH KUMAR V'));
  assert.ok(text.includes('CMR University'));
  assert.ok(text.includes('8.21 CGPA'));
  assert.ok(text.includes('RoadWise'));
  assert.ok(text.includes('Smart Code Quality Analyzer'));
  assert.ok(text.includes('Alva'));
});
