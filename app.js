const projects = [
  {
    "id": "climate",
    "name": "ClimateGPT Fusion",
    "year": "2025",
    "label": "APPLIED AI / CLIMATE",
    "categories": [
      "ai",
      "data"
    ],
    "color": "",
    "visual": "9% → 0%",
    "sub": "Hallucinations in the reported evaluation",
    "desc": "A hybrid RAG + MCP system that grounds climate analytics in structured emissions data.",
    "tags": [
      "RAG + MCP",
      "DuckDB",
      "Streamlit",
      "Evaluation"
    ],
    "problem": "Climate analytics needs answers that can be checked against underlying data. This capstone focused on reducing unsupported answers while making emissions data easier to explore.",
    "metrics": [
      [
        "9% → 0%",
        "Hallucinations"
      ],
      [
        "94% → 100%",
        "Query success"
      ],
      [
        "35 → 92 /100",
        "Provenance"
      ]
    ],
    "flow": "Question → entity normalization → retrieval / validated SQL → sourced response → evaluation",
    "contribution": "My work brought together the MCP server and bridge, entity normalization, validated SQL access, the Streamlit interface, and a seed-driven evaluation harness built from 50 question templates. Years, dates, and countries are randomly selected by seed to produce 50 questions per seed. I also worked on metadata, provenance, and bias evaluation.",
    "decisions": [
      "Combined retrieval with MCP access to structured data, so answers could use both context and emissions queries.",
      "Used parameterized, SELECT-only SQL and schema validation to constrain database operations.",
      "Kept provenance visible alongside answer quality, treating traceability as a separate evaluation target."
    ],
    "challenge": "Climate questions use inconsistent country and sector names. Entity normalization and fuzzy matching helped connect those questions to the EDGAR schema; query validation provided an additional check before execution.",
    "evaluation": "The evaluation harness generates 50 questions per seed from 50 question templates, randomly selecting years, dates, and countries. Reusing a seed reproduces the same question set; changing the seed generates another set of parameter combinations. The reported project evaluation showed hallucinations falling from 9% to 0%, query success rising from 94% to 100%, and provenance improving from 35/100 to 92/100. Average response time was approximately 5.7 seconds, with roughly 50% less database load.",
    "limitation": "These figures describe the reported project evaluation, not guaranteed performance across every seed or parameter combination. A 0% hallucination result in evaluated runs does not guarantee error-free answers to unseen questions. The project uses EDGAR v2024 coverage for 2000–2024.",
    "measurement": [
      [
        "What 92/100 means",
        "The average completeness of source-traceability information across evaluated responses. Each response earns 20 points for each of five elements: data source, file ID, applied filters, contributing row count, and temporal coverage."
      ],
      [
        "How it was scored",
        "Automated text checks look for those five elements, producing a score from 0 to 100. The reported average improved from 35 to 92. This measures the presence of provenance information; numerical answer correctness is evaluated separately."
      ],
      [
        "How the questions vary",
        "The harness uses 50 question templates and generates 50 questions per seed. Years, dates, and countries are selected randomly using that seed, making each generated set reproducible without restricting evaluation to 50 fixed questions."
      ]
    ],
    "githubUrl": "https://github.com/vasishta02/ClimateGPT",
    "githubLabel": "View repository"
  },
  {
    "id": "grid",
    "name": "GridSense",
    "year": "2026",
    "label": "MACHINE LEARNING / INFRASTRUCTURE",
    "categories": [
      "ml",
      "ai"
    ],
    "color": "blue",
    "visual": "Image + text",
    "sub": "Multimodal learning for grid asset risk",
    "desc": "A multimodal ML project connecting asset imagery, text, and explainable risk analysis.",
    "tags": [
      "PyTorch",
      "ResNet18",
      "SHAP",
      "FastAPI"
    ],
    "problem": "Asset-risk analysis can draw on multiple kinds of evidence. GridSense explores how image and text inputs can work together in a machine learning workflow.",
    "metrics": [],
    "flow": "Image + text → feature representations → fusion model → risk analysis → API",
    "contribution": "My work included image, text, and fusion models, SHAP analysis, a FastAPI interface, Docker packaging, and GitHub Actions. I also developed deployment manifests and a local retrieval workflow with LangChain, FAISS, and sentence-transformers.",
    "decisions": [
      "Kept image, text, and fusion approaches distinct so their inputs and modeling behavior could be examined separately.",
      "Used ResNet18 for the image branch and SHAP to support model interpretation.",
      "Separated model serving through FastAPI from deployment configuration; included Kubernetes manifests and Vertex AI job-spec scaffolding."
    ],
    "challenge": "Imagery and text represent different kinds of asset evidence. The project brings those inputs into a common risk-analysis workflow while keeping model explanations and delivery components inspectable.",
    "evaluation": "The project covers modeling, explanation, API delivery, and deployment configuration. This case study presents those implementation outputs; a comparative performance benchmark is not published here.",
    "limitation": "The LangChain retrieval workflow runs locally. The Vertex AI work is job-spec scaffolding, and the deployment configuration is separate from evidence of a production rollout.",
    "githubUrl": "https://github.com/vasishta02/gridsense",
    "githubLabel": "View repository"
  },
  {
    "id": "radar",
    "name": "Job Radar",
    "year": "2025",
    "label": "DATA ENGINEERING / AUTOMATION",
    "categories": [
      "data"
    ],
    "color": "purple",
    "visual": "Source → decision",
    "sub": "Ingestion, scoring, and a review dashboard",
    "desc": "An end-to-end job-intelligence system combining multi-source ingestion, persistent state, scheduled workflows, and Gemini-assisted scoring.",
    "tags": [
      "Python",
      "SQLite",
      "GitHub Actions",
      "Gemini",
      "Dashboard"
    ],
    "problem": "Job opportunities are spread across different applicant-tracking systems, making consistent discovery and prioritization repetitive.",
    "metrics": [],
    "flow": "Career pages / ATS boards → normalization & deduplication → SQLite → scoring → dashboard / notifications",
    "contribution": "I built multi-source ingestion, normalization and deduplication, persistent SQLite storage, scheduled GitHub Actions workflows, and a dashboard for reviewing and tracking jobs. The scoring workflow combines structured rules with Gemini-assisted review.",
    "decisions": [
      "Separated source adapters from shared normalization, storage, scoring, and notification logic so integrations could evolve independently.",
      "Kept scanned and manually entered jobs in a shared SQLite database, with persistent state to support repeat runs and deduplication.",
      "Used scheduled workflows for collection and a dashboard for human review; relevance scores support prioritization rather than automatic application decisions.",
      "Added HTTP retries and backoff, including handling for rate limits and Retry-After headers, plus regression tests for source and workflow behavior."
    ],
    "challenge": "Sources differ in schemas, availability, and rate limits. Repeated collection also creates risks around duplicate records and database consistency. The project addresses these operational concerns through shared retry logic, persistent state, board cooldowns, and regression coverage.",
    "evaluation": "The repository includes regression tests for source adapters, board backoff, evaluation logic, notifications, dashboard snapshots, and scan routes. These provide inspectable engineering evidence alongside the ingestion-to-dashboard workflow; no measured increase in interviews or offers is claimed.",
    "limitation": "Source coverage depends on external site availability and access. Gemini-assisted scoring can be imperfect and requires review; relevance scores are not hiring probabilities.",
    "githubUrl": "https://github.com/chandalagufus/job",
    "githubLabel": "View repository"
  },
  {
    "id": "bridges",
    "name": "Bridge Condition Prediction",
    "year": "2024",
    "label": "MACHINE LEARNING / TRANSPORTATION",
    "categories": [
      "ml",
      "data"
    ],
    "color": "orange",
    "visual": "77.7%",
    "sub": "Project classification accuracy",
    "desc": "Bridges at Risk: distributed infrastructure data preparation, clustering, and interpretable condition prediction.",
    "tags": [
      "PySpark",
      "Databricks",
      "XGBoost",
      "SHAP"
    ],
    "problem": "Transportation infrastructure data can help organize risk patterns and support more informed analysis of bridge conditions.",
    "metrics": [
      [
        "77.7%",
        "Classification accuracy"
      ],
      [
        "4",
        "Clusters"
      ],
      [
        "0.87",
        "Silhouette score"
      ]
    ],
    "flow": "Infrastructure data → distributed preparation → clustering / classification → explanation",
    "contribution": "My work combined PySpark and Databricks data preparation, Snowflake analytics, clustering, XGBoost classification, and SHAP explanations for transportation infrastructure data.",
    "decisions": [
      "Used distributed preparation to structure infrastructure records for analysis.",
      "Applied clustering to explore patterns and classification to predict the project target.",
      "Used SHAP to connect predictions with the features influencing the model."
    ],
    "challenge": "Infrastructure analysis needs both useful grouping and interpretable predictions. Clustering and classification addressed those distinct questions within the same project.",
    "evaluation": "Clustering produced four groups with a silhouette score of 0.87. The XGBoost classifier achieved 77.7% accuracy in the project evaluation, while SHAP supported interpretation of its outputs.",
    "limitation": "The 77.7% figure is a project-reported result. The available summary does not specify the train/test split, class balance, or a baseline comparison, so the score alone cannot establish generalization or operational bridge-safety readiness.",
    "measurement": [
      [
        "Classification accuracy · 77.7%",
        "Accuracy is the number of correct class predictions divided by the number of evaluated examples. This is the reported XGBoost result from the Bridges at Risk academic project, following PySpark / Databricks data preparation and Snowflake analysis."
      ],
      [
        "Clustering · 0.87 silhouette",
        "The four-cluster result is a separate unsupervised analysis. Silhouette measures how closely examples match their own cluster compared with other clusters, on a scale from −1 to 1; it is separate from classification accuracy."
      ]
    ],
    "githubUrl": null,
    "githubLabel": "Private repository"
  },
  {
    "id": "quant",
    "name": "Quantitative Asset Forecasting",
    "year": "2025",
    "label": "MACHINE LEARNING / FINANCIAL DATA",
    "categories": [
      "ml"
    ],
    "color": "blue",
    "visual": "68–71%",
    "sub": "SPY directional accuracy in a project backtest",
    "desc": "A time-series forecasting project comparing attention-based LSTM and ARIMA models across market assets.",
    "tags": [
      "LSTM",
      "ARIMA",
      "Time series",
      "Feature engineering"
    ],
    "problem": "Financial time series are noisy. This project explored directional forecasting and the relationship between prediction accuracy and signal coverage.",
    "metrics": [
      [
        "68–71%",
        "SPY directional accuracy"
      ],
      [
        "63–66%",
        "QQQ directional accuracy"
      ],
      [
        "~30%",
        "Signal coverage"
      ]
    ],
    "flow": "Historical data → 50+ features → LSTM / ARIMA → forecasts → backtest evaluation",
    "contribution": "I developed a forecasting workflow for SPY, QQQ, GLD, and AAPL using more than 50 features, attention-based LSTM models, and ARIMA comparisons.",
    "decisions": [
      "Compared an attention-based LSTM approach with ARIMA rather than assessing a single model in isolation.",
      "Tracked directional accuracy alongside signal coverage, so the results showed how often the strategy produced a signal.",
      "Kept backtest outcomes distinct from live trading performance."
    ],
    "challenge": "Market data is noisy, and selective signals can produce accuracy that is difficult to interpret without coverage. Reporting both makes the evaluation easier to assess.",
    "evaluation": "Project backtests reported SPY directional accuracy of 68–71%, QQQ accuracy of 63–66%, and approximately 30% signal coverage. A gross Sharpe ratio above 5 was observed in the backtest.",
    "limitation": "These are historical project backtests, not live returns. The gross Sharpe figure excludes trading costs; execution costs and unseen market conditions can materially change outcomes.",
    "githubUrl": "https://github.com/vasishta02/Quantitative-Asset-Forecasting",
    "githubLabel": "View repository"
  },
  {
    "id": "urban",
    "name": "Urban Intelligence",
    "year": "Project",
    "label": "DATA ENGINEERING / SMART CITIES",
    "categories": [
      "data"
    ],
    "color": "",
    "visual": "City signals",
    "sub": "From sensor data to operational insight",
    "desc": "A smart-city analytics workflow for ingesting signals, detecting anomalies, and exploring results on maps.",
    "tags": [
      "Airflow",
      "BigQuery",
      "Anomaly detection",
      "Maps"
    ],
    "problem": "City operations generate sensor and API data that needs consistent preparation before it can support useful operational analysis.",
    "metrics": [],
    "flow": "Sensors / APIs → Airflow ingestion → BigQuery models → anomaly detection → maps",
    "contribution": "I worked on sensor/API ingestion, Airflow orchestration, partitioned BigQuery models, anomaly detection, and map-based views for smart-city operational analytics.",
    "decisions": [
      "Used Airflow to organize recurring ingestion and preparation steps.",
      "Used partitioned BigQuery models to structure the analytical data.",
      "Connected anomaly detection with geographic views so unusual signals could be explored in context."
    ],
    "challenge": "Operational signals arrive through different sensors and APIs. The workflow brings ingestion, analytical preparation, and location-based exploration into one process.",
    "evaluation": "The project deliverables span ingestion, partitioned data models, anomaly detection, and map-based visualization. A quantified operational-impact study is not published here.",
    "limitation": "An anomaly is a signal for investigation, not a confirmed operational incident. Results depend on source coverage and data quality.",
    "githubUrl": null,
    "githubLabel": "Private repository"
  },
  {
    "id": "hospital",
    "name": "Hospital Readmission Prediction",
    "year": "Project",
    "label": "MACHINE LEARNING / HEALTHCARE DATA",
    "categories": [
      "ml"
    ],
    "color": "purple",
    "visual": "2.24×",
    "sub": "Top-decile lift against random selection",
    "desc": "An interpretable prediction project using healthcare data to investigate hospital readmission risk.",
    "tags": [
      "XGBoost",
      "TreeSHAP",
      "Cross-validation",
      "Data quality"
    ],
    "problem": "Readmission-risk prediction requires useful features, reliable data, and explanations that help make model behavior understandable.",
    "metrics": [
      [
        "2.24×",
        "Lift in the top 10%"
      ],
      [
        "22.4%",
        "Readmissions captured"
      ],
      [
        "14,708",
        "Test-set records"
      ]
    ],
    "flow": "Records → data quality / features → cross-validation → XGBoost → TreeSHAP",
    "contribution": "I prepared and validated more than 101,000 records, engineered features, trained XGBoost with cross-validation, and used TreeSHAP to interpret the model.",
    "decisions": [
      "Included data-quality checks and feature engineering before modeling.",
      "Used cross-validation to evaluate predictive behavior across data splits.",
      "Added TreeSHAP explanations to show which features influenced model outputs."
    ],
    "challenge": "Readmission-risk analysis needs more than a prediction score. Data consistency and interpretable features were central to making the model’s behavior understandable.",
    "evaluation": "On a 14,708-record test set, the highest-risk 10% captured 372 of 1,660 observed readmissions—approximately 22.4%. Selecting the same proportion at random would capture 10% on average, giving 22.4% ÷ 10% = 2.24× lift. Test ROC-AUC was 0.6696; TreeSHAP supported feature-level interpretation.",
    "limitation": "Lift measures retrospective risk ranking, not a reduction in readmissions or a treatment effect. This is a project evaluation, not a clinical deployment. The documented split is stratified by outcome; patient-level separation and external-hospital validation are not established by the available evaluation notes.",
    "measurement": [
      [
        "Baseline & calculation",
        "Lift compares the readmission concentration in the top-scored group with the overall test-set rate. Here, the top 10% captured 22.4% of readmissions: 22.4 ÷ 10 = 2.24. The baseline is random selection of an equally sized group."
      ],
      [
        "Evaluation setup",
        "After preprocessing, the documented pipeline used a 70% training / 15% validation / 15% test split, stratified by the 30-day readmission target, with random seed 42. Ranking and lift were evaluated on the 14,708-record test set."
      ]
    ],
    "githubUrl": null,
    "githubLabel": "Private repository"
  }
];
const container = document.getElementById('projects');
const dialog = document.getElementById('case');
const caseContent = document.getElementById('case-content');
let caseOpener = null;
function projectLink(p) { if (!p.githubUrl) return `<span class="project-repo">Private repository</span>`; return `<a class="project-repo" href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="${p.githubLabel} for ${p.name} (opens in a new tab)">${p.githubLabel} <span aria-hidden="true">↗</span></a>`; }
function projectCard(p) { return `<article class="project"><div class="project-visual ${p.color}"><span class="visual-caption">${p.label}</span><div class="visual-value">${p.visual}<small>${p.sub}</small></div></div><div class="project-body"><div class="project-meta"><span>PROJECT ${String(projects.indexOf(p)+1).padStart(2,'0')}</span><span>${p.year}</span></div><h3>${p.name}</h3><p>${p.desc}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div><button data-project="${p.id}" aria-haspopup="dialog" aria-label="Read ${p.name} case study">Read case study</button>${projectLink(p)}</article>`; }
const featuredIds = ['climate', 'grid', 'radar'];
document.getElementById('featured-projects').innerHTML = featuredIds.map(id => projectCard(projects.find(p => p.id === id))).join('');
function render(filter = 'all') {
  const selected = projects.filter(p => filter === 'all' || p.categories.includes(filter));
  container.innerHTML = selected.map(projectCard).join('');
  document.getElementById('filter-status').textContent = `Showing ${selected.length} ${selected.length === 1 ? 'project' : 'projects'}`;
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  render(button.dataset.filter);
}));
document.querySelector('.feature-link').setAttribute('aria-haspopup', 'dialog');
document.addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (!button) return;
  const p = projects.find(project => project.id === button.dataset.project);
  if (!p) return;
  caseOpener = button;
  caseContent.innerHTML = `<p class="eyebrow">${p.label} · ${p.year}</p><h2 class="case-title" id="case-title" tabindex="-1">${p.name}</h2><div class="case-repo">${projectLink(p)}</div><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>${p.metrics.length ? `<div class="case-metrics">${p.metrics.map(m=>`<div><b>${m[0]}</b><span>${m[1]}</span></div>`).join('')}</div>` : ''}<div class="case-section"><h3>The problem</h3><p>${p.problem}</p><h3>My contribution</h3><p>${p.contribution}</p><h3>Technical decisions</h3><ul>${p.decisions.map(d=>`<li>${d}</li>`).join('')}</ul><h3>The challenge</h3><p>${p.challenge}</p><h3>Workflow</h3><ol class="case-flow">${p.flow.split(' → ').map(step=>`<li>${step}</li>`).join('')}</ol><h3>Evaluation & results</h3><p>${p.evaluation}</p>${p.measurement ? `<div class="measurement"><h3>How to read the results</h3><dl>${p.measurement.map(([label, detail]) => `<div><dt>${label}</dt><dd>${detail}</dd></div>`).join('')}</dl></div>` : ''}<h3>Scope & limitations</h3><p>${p.limitation}</p></div>`;
  dialog.showModal();
  document.body.classList.add('case-open');
  document.getElementById('case-title').focus({preventScroll: true});
  dialog.scrollTop = 0;
});
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {
  document.body.classList.remove('case-open');
  if (caseOpener?.isConnected) caseOpener.focus({preventScroll: true});
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
render();
